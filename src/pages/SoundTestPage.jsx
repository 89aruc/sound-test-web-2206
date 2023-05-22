import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import RecordTable from "../components/RecordTable/RecordTable";
import AudioPlayer from "../components/AudioPlayer/AudioPlayer";

import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    item: {
      padding: '0 !important',
    },
}));

function SoundTestPage() {
  const classes = useStyles();

  const [files, setFiles] = useState([null]);

  const pushFile = file => {
    setFiles([...files, file]);
  };

  const setFile = file => {
    setFiles(file);
  };

  const [regions, setRegions] = useState([
      {
        id: 'region-1',
        start: 0,
        end: 1,
        color: "rgba(60, 179, 113, 0.3)"
      }
    ]);

  const setRegion = region => {
    setRegions([region]);
  };

  const [rows, setRows] = useState([]);
  
  const fetchData = () => {
    axios.get("http://sound.bs-soft.co.kr/status")
        .then((response)=> {
            console.log('response status: ',response.data);
            setRows(response.data);
        })
        .catch((error)=> {
            console.log(error);
        })
  }

  return (
    <Layout title="사운드 테스트 페이지" fetchData={fetchData} >
      <>
        <RecordTable regions={regions} setFile={setFile} fetchData={fetchData} rows={rows} />
        <Grid container direction="column">
          {files.map((file, index) => (
            <Grid key={index} item className={classes.item}>
              <AudioPlayer file={file} regions={regions} setRegion={setRegion}/>
            </Grid>
          ))}
        </Grid>
      </>
    </Layout>
  )
}


export default SoundTestPage;