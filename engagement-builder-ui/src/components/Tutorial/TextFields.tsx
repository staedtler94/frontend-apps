import { InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";

export const FormTextField = () => {
  const [value, setValue] = useState("");

  const validationError = () =>{
    if(value) return false
    return true;
  }
  /*
        Double stacked for demo purposes only
    */
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField
          id="standard-outlined"
          label="Outlined"
          variant="outlined"
          required
        />
        <TextField id="standard-filled" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          id="standard-small"
          label="Standard but small"
          size="small"
          variant="standard"
        />
        <TextField
          id="standard-with-help"
          label="Outlined but disabled"
          helperText="Add your helper text here"
          variant="outlined"
          disabled
        />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
          disabled
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Validation Setting"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={validationError()}
          helperText={validationError() ? "This field is only numeric" : "Share non-sensitive data here"}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
          disabled
        />
      </Stack>
    </Stack>
  );
};
