import { ChangeEvent, useState, KeyboardEvent } from "react";
import { IconButton, TextField } from "@mui/material";
import { ControlPoint } from "@mui/icons-material";

type AddItemFormPropsType = {
  addItem: (title: string) => void;
};

export function AddItemForm(props: AddItemFormPropsType) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.key === "Enter") {
      addTask();
    }
  };
  const addTask = () => {
    if (title.trim() === "") {
      setError("Title is required");
      return;
    }
    props.addItem(title.trim());
    setTitle("");
  };

  return (
    <div>
      <TextField
        value={title}
        variant={"outlined"}
        label={"Type value"}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        error={!!error}
        helperText={error}
      />

      <IconButton onClick={addTask} color={"primary"}>
        <ControlPoint />
      </IconButton>
    </div>
  );
}
