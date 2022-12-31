import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import HeaderBox from "../../../components/HeaderBox";
import Logo from "../../../components/Logo";
// import Button from "../../../components/MainButton";
import Footer from "../../../Lib/Footer";

function ForgotPassword02() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [cPassword, setCPassword] = useState();

  const updatePassword = () => {
    if (password === cPassword) {
      window.alert("Done");
    } else {
      window.alert("Passwords Doesn`t Match");
    }
  };

  return (
    <div>
      <div className="bg-back-blue">
        <div className="max-w-[1000px] mx-auto sm:mb-28 ">
          <div className="py-4 sm:mb-20 ">
            <Logo />
          </div>
          <HeaderBox
            extraTailwind="my-4"
            header="Update Password"
            backIcon="true"
            backPath="/ForgotPassword01"
          />
          <div className="p-4 pt-0 mb-12">
            <div className="bg-white">
              <div className="p-4">
                <ValidatorForm
                  className="md:flex w-[90%] m-auto py-4 "
                  onSubmit={updatePassword}
                  onError={() => null}
                >
                  <Grid container spacing={1}>
                    <Grid
                      // className="flex items-center"
                      item
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                    >
                      <TextValidator
                        // sx={{ width: "90%" }}
                        className="w-full mb-4 md:mb-0  "
                        label="User Name"
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={userName}
                        onChange={(e) => {
                          setUserName(e.target.value);
                        }}
                        validators={["required"]}
                        errorMessages={["This field is required"]}
                      />
                    </Grid>
                    <Grid
                      // className="flex items-center"
                      item
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                    >
                      <TextValidator
                        // sx={{ width: "90%" }}
                        className="w-full mb-4 md:mb-0  "
                        label="Password"
                        type="password"
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        validators={["required"]}
                        errorMessages={["This field is required"]}
                      />
                    </Grid>
                    <Grid
                      // className="flex items-center"
                      item
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                    >
                      <TextValidator
                        // sx={{ width: "90%" }}
                        className="w-full mb-4 md:mb-0  "
                        label="Confirm Password"
                        fullWidth
                        type="password"
                        variant="outlined"
                        size="small"
                        value={cPassword}
                        onChange={(e) => {
                          setCPassword(e.target.value);
                        }}
                        validators={["required"]}
                        errorMessages={[
                          "This field is required",
                          // "Password Mismatch",
                        ]}
                      />
                    </Grid>
                    <Grid
                      className="flex mt-2 justify-center"
                      item
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                    >
                      <Button type="submit" variant="contained">
                        Update
                      </Button>
                    </Grid>
                  </Grid>
                </ValidatorForm>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ForgotPassword02;
