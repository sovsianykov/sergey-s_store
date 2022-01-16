// import React, { useEffect, useState } from "react";
// import {
//   Paper,
//   Stepper,
//   Step,
//   StepLabel,
//   Typography,
//   // CircularProgress,
//   // Divider,
//   // Button,
// } from "@material-ui/core";
// import useStyles from "./Styles";
// import { Payment } from "@material-ui/icons";
// import AddressForm from "../AddressForm";
// import PaymentForm from "../PaymentForm";
// import { commerce } from "../../../lib/commerse";
//
// const steps = ["Shipping address", "Payment details"];
//
// function Checkout({ cart }) {
//   const classes = useStyles();
//   const [activeStep, setSteActiveStep] = useState(0);
//   const [checkoutToken, setCheckoutToken ] = useState(null)
//   useEffect(() => {
//     const generateToken = async () => {
//       try {
//         const token = await commerce.checkout.generateToken(cart.id, { type : 'cart'})
//           console.log(token)
//           setCheckoutToken(token)
//       } catch (error) {}
//     };
//     generateToken()
//   }, [cart])
//   console.log( 'checkoutToken is ' + checkoutToken)
//
//
//   const Confirmation = () => <div>Confirmation</div>;
//   const Form = () => (activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} /> : <PaymentForm />);
//
//
//
//   return (
//     <>
//       <div className={classes.toolbar} />
//       <main className={classes.layout}>
//         <Paper className={classes.paper}>
//           <Typography variant="h4" align="center">
//             Checkout
//           </Typography>
//           <Stepper activeStep={activeStep} className={classes.stepper}>
//             {steps.map((step) => (
//               <Step key={step}>
//                 <StepLabel>{step}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//           {activeStep === steps.length ? <Confirmation /> : checkoutToken&&<Form />}
//         </Paper>
//       </main>
//     </>
//   );
// }
//
// export default Checkout;