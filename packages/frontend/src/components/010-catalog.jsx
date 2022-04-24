import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

import { list } from "../services/phoneServices";

import Loading from "./100-loading";
import Card from "./100-card";

function body(props) {
  const [loading, setLoading] = useState(true);
  const [phoneList, setPhoneList] = useState();

  useEffect(() => {
    let mounted = true;
    list().then((items) => {
      if (mounted) {
        setPhoneList(items);
        setLoading(false);
      }
    });
    return () => (mounted = false);
  }, []);

  let content;
  if (loading) {
    content = <Loading />;
  } else {
    content = (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12, lg:12 }}
      >
        {phoneList.map((phoneData, idx) => (
          <Grid key={idx} item xs={4} sm={8} md={6} lg={4}>
            <Card data={phoneData}></Card>
          </Grid>
        ))}
      </Grid>
    );
  }
  return <div>{content}</div>;
}

export default body;
