import { useField } from "formik";
import { cloneElement, PropsWithChildren, useState, useEffect } from "react";
import toast from "react-hot-toast";
import Button from "../Button/Button";
import Dialog from "../Dialog/Dialog";
import { Helper } from "../FormControl/FormControl.styles";
import { ImageIcon, TickIcon } from "./Banner.icons";
import * as Styled from "./BannerPicker.styles";

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
  const [field, meta, helper] = useField<string>(name);
  const [selected, setSelected] = useState<string | null>(field.value);

  const handleSave = () => {
    helper.setValue(selected);
    setOpen(false);
  };

  const handleClose = () => {
    setSelected(field.value);
    setOpen(false);
  };

  const isError = !!meta.touched && !!meta.error;

  return (
    <>
      {!field.value ? (
        <Styled.BannerPicker
          isError={isError}
          type="button"
          onClick={() => setOpen(true)}
        >
          <ImageIcon />
          <span>Add a banner</span>
        </Styled.BannerPicker>
      ) : (
        <Styled.BannerPicker
          isError={isError}
          onClick={() => setOpen(true)}
          type="button"
          style={{
            backgroundImage: `url(${field.value})`,
          }}
        />
      )}
      <Dialog open={open} onClose={handleClose}>
        <Dialog.Header>{title}</Dialog.Header>
        <Dialog.Content>
          <Styled.BannerPickerContainer>
            {images.map((img) => (
              <Styled.ImageButton selected={img === selected}>
                <Styled.Image
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  src={img}
                  alt="Supermonos"
                  role="button"
                  onClick={() => setSelected(img)}
                />
                {img === selected && <Styled.TickIcon />}
              </Styled.ImageButton>
            ))}
          </Styled.BannerPickerContainer>
        </Dialog.Content>
        <Dialog.Buttons>
          <Dialog.Buttons.CancelButton>Cancel</Dialog.Buttons.CancelButton>
          <Button onClick={handleSave} disabled={!selected}>
            Save
          </Button>
        </Dialog.Buttons>
      </Dialog>
    </>
  );
};

export default BannerPicker;
