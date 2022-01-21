import React from "react";
import {Container, Grid, Paper, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f4f4",
  },
    paper: {
      minHeight: "60vh",
        padding: 20
    }
}));

const About = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
        <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">
                        About us
                    </Typography>
                    <Typography variant="body" color="inherit">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                        assumenda error expedita illo maiores, modi officiis placeat quidem
                        quis similique soluta tempore ut? Cupiditate earum facere fugiat
                        itaque, perspiciatis veritatis voluptatem voluptatibus. Corporis
                        dolor fuga nam, odio qui quod reiciendis.
                    </Typography>
                    <Typography variant="body" color="inherit">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                        assumenda error expedita illo maiores, modi officiis placeat quidem
                        quis similique soluta tempore ut? Cupiditate earum facere fugiat
                        itaque, perspiciatis veritatis voluptatem voluptatibus. Corporis
                        dolor fuga nam, odio qui quod reiciendis.
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">
                        How it's work
                    </Typography>
                    <Typography variant="body" color="inherit">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                        assumenda error expedita illo maiores, modi officiis placeat quidem
                        quis similique soluta tempore ut? Cupiditate earum facere fugiat
                        itaque, perspiciatis veritatis voluptatem voluptatibus. Corporis
                        dolor fuga nam, odio qui quod reiciendis.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                        assumenda error expedita illo maiores, modi officiis placeat quidem
                        quis similique soluta tempore ut? Cupiditate earum facere fugiat
                        itaque, perspiciatis veritatis voluptatem voluptatibus. Corporis
                        dolor fuga nam, odio qui quod reiciendis.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                        assumenda error expedita illo maiores, modi officiis placeat quidem
                        quis similique soluta tempore ut? Cupiditate earum facere fugiat
                        itaque, perspiciatis veritatis voluptatem voluptatibus. Corporis
                        dolor fuga nam, odio qui quod reiciendis.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                        assumenda error expedita illo maiores, modi officiis placeat quidem
                        quis similique soluta tempore ut? Cupiditate earum facere fugiat
                        itaque, perspiciatis veritatis voluptatem voluptatibus. Corporis
                        dolor fuga nam, odio qui quod reiciendis.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    </Container>
  );
};

export default About;
