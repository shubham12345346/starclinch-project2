import { height } from '@mui/system';
import React from 'react';
import './Black.css';

const Black = () => {
  return (
    <div style={{backgroundColor:'black', color:'white', height:'470px'}}>
        <h4 align= "center">6000+ Users trust StarClinch.</h4>
        <h6 align ="center" style={{color:'goldenrod'}}>Booking Terms & Conditions</h6>
        <br/>
        <br/>
        <h2 align="center">BOOKING TERMS & CONDITIONS FOR CLIENT</h2>
        <h4 align="center">Advance Fee and Payment Terms</h4><br/><br/>
        <span>All acts are subject to availability</span><br/>
        <span>GST @18% will be applicable</span><br/>
        <span>We take an advance of 50% to confirm a show</span><br/>
        <span>Quotation is valid for 14 days and subject to change</span><br/>
        <span>The balance amount needs to be paid 7 days before the show</span><br/>
        <span>TBL(Travel, Boarding & Lodging) will be arranged by the organizer</span><br/>
        <span>Tech-Rider(sound,stage & lighting) will be arranged by the organiger</span><br/>
        <span>EMI is applicable for payments made by Credit Cards only</span><br/>
        </div>
  );
}

export default Black;