import React from "react";
import { FTextField, FormProvider, FUploadImage } from "../../components/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { alpha, Button, Card, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { LoadingButton } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "./postSlice";
import { useCallback } from "react";

const yupSchema = Yup.object().shape({
  content: Yup.string().required("Content is required"),
});

const defaultValues = {
  content: "",
  image: "",
};

function EditPostForm({ handleCloseEdit }) {
  const methods = useForm({
    resolver: yupResolver(yupSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    reset,
    setValue,
    formState: { isSubmitting },
  } = methods;

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.post);

  const onSubmit = (data) => {
    dispatch(editPost(data)).then(() => reset());
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          "image",
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  return (
    <Card sx={{ p: 3 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <FTextField
            name="content"
            multiline
            fullWidth
            rows={4}
            placeholder="Share what you are thinking here..."
            sx={{
              "& fieldset": {
                borderWidth: `1px !important`,
                borderColor: alpha("#919EAB", 0.32),
              },
            }}
          />
          {/* <FTextField name="image" placeholder="Image" /> */}
          <FUploadImage
            name="image"
            accept="image/*"
            maxSize={3145728}
            onDrop={handleDrop}
          />

          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <LoadingButton
              type="submit"
              variant="contained"
              size="small"
              loading={isSubmitting || isLoading}
            >
              SAVE
            </LoadingButton>
            <Button variant="contained" size="small" onClick={handleCloseEdit}>
              CANCEL
            </Button>
          </Stack>
        </Stack>
      </FormProvider>
    </Card>
  );
}

export default EditPostForm;