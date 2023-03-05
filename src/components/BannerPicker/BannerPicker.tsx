import { useField } from "formik";
import { PropsWithChildren, useState } from "react";
import Button from "../Button/Button";
import Dialog from "../Dialog/Dialog";

interface IBannerPickerProps {
  name: string;
  required?: boolean;
  title: string;
  images: string[];
}

const BannerPicker: React.FC<PropsWithChildren<IBannerPickerProps>> = ({
  name,
  title,
  images,
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [field, meta, helper] = useField<string[]>(name);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
        onClick={() => setOpen(true)}
      >
        {children}
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Dialog.Header>{title}</Dialog.Header>
        <Dialog.Content>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            {images.map((img) => (
              <img
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={img}
                alt="Supermonos"
              />
            ))}
          </div>
        </Dialog.Content>
        <Dialog.Buttons>
          <Dialog.Buttons.CancelButton>Cancel</Dialog.Buttons.CancelButton>
          <Button>Save</Button>
        </Dialog.Buttons>
      </Dialog>
    </>
  );
};

export default BannerPicker;
