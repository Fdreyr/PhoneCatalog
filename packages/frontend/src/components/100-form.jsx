import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useTheme, Paper, Grid, TextField, Typography } from "@mui/material";
import produce from "immer";
import { capitalize } from "lodash";

import { find } from "../services/phoneServices";

import Loading from "./100-loading";

function FormContainer(props) {
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [attributes, setAttributes] = useState();

  useEffect(() => {
    let mounted = true;
    find(params.id).then((attrs) => {
      if (mounted) {
        setAttributes(attrs);
        setLoading(false);
      }
    });
    return () => (mounted = false);
  }, []);

  const handleChange = useCallback(({ key, value }) => {
    setAttributes(
      produce((draft) => {
        draft[key] = value;
      })
    );
  }, []);

  let content;
  if (loading) {
    content = <Loading />;
  } else {
    content = <PhoneForm attributes={attributes} handleChange={handleChange} />;
  }

  return content;
}

function PhoneForm(props) {
  const theme = useTheme();
  const styles = {
    paper: {
      padding: theme.spacing(2),
    },
  };

  const fields = [
    "name",
    "description",
    "manufacturer",
    "color",
    "screen",
    "processor",
    "ram",
    "price",
  ];
  const imageLocator = `/img/${props.attributes.imageFileName}`;
  return (
    <div>
      <Paper style={styles.paper}>
        <Grid container spacing={4} justifyContent="space-around">
          <Grid container spacing={2} item xs={12} md={6} direction="column">
            <Grid item>
              <Typography variant="h6">{`Smartphone details`}</Typography>
            </Grid>
            {fields.map((fieldName) => (
              <PhoneInput
                key={fieldName}
                fieldName={fieldName}
                value={props.attributes[fieldName]}
                handleChange={props.handleChange}
              />
            ))}
          </Grid>
          <Grid item sm={12} md={3}>
            <img style={{ width: 350 }} src={imageLocator}></img>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

function PhoneInput(props) {
  const fieldName = props.fieldName;

  const handleTextValueChange = (key) => (event) => {
    this.props.handleChange({
      path: key,
      value: event.target.value,
    });
  };

  return (
    <Grid item>
      <TextField
        label={capitalize(fieldName)}
        value={props.value}
        variant="standard"
        InputProps={{
          readOnly: true,
        }}
        onChange={handleTextValueChange(fieldName)}
        multiline
        maxRows={4}
        fullWidth
      />
    </Grid>
  );
}

export default FormContainer;
