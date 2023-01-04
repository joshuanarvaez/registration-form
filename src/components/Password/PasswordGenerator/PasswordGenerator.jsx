import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BsClipboardCheck } from 'react-icons/bs';
import { PasswordService } from './PasswordService';

const PasswordGenerator = () => {
    // create states for our inputs
    let [state, setState] = useState({
      generatedPassword: '',
      passwordLength: 7,
      showGenerator: true,
    });
  
    // update state of generated password and password length
    const updateInput = (event) => {
      setState({
        [event.target.name]: event.target.value,
      });
    };
  
    // when generate button is clicked, pull appropriate characters from PasswordService based off state of passwordObj
    const handleGenerateButtonClick = () => {
      let password = PasswordService.generatePassword(state.passwordLength);
      // now display the generated password in the appropriate textbox
      setState({ ...state, generatedPassword: password });
    };
  
    // close the password generator component
    const closeGenerator = () => {
      setState({ ...state, showGenerator: false });
    };

    return (
        <React.Fragment>
        {state.showGenerator && (
            <div className="container mt-3">
                <div className="row">
                    <div className="form-card">
                        <div className="card">
                            <div className="card-body" >
                                <div className="mb-1">
                                    <div className="input-group">
                                        <input
                                            value={state.generatedPassword}
                                            onChange={updateInput}
                                            name="generatedPassword"
                                            type="text" className="form-control" placeholder="Set length and generate" />
                                        <CopyToClipboard
                                            text={state.generatedPassword} // here we target generated password to copy
                                            onCopy={() => { state.generatedPassword && alert("Copied generated password to your clipboard"); closeGenerator()}}>
                                            <span className="input-group-text">
                                                <i
                                                    type="submit"
                                                    className="color">
                                                    <BsClipboardCheck />
                                                </i>
                                            </span>
                                        </CopyToClipboard>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <div className="input-group">
                                        <input
                                            required={true} // only require password length
                                            value={state.passwordLength}
                                            onChange={updateInput}
                                            name="passwordLength"
                                            type="number" className="form-control" placeholder="Password Length" />
                                        <span className="input-group-text clipboard"> Length </span>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <input
                                        type="button"
                                        value="Generate"
                                        onClick={handleGenerateButtonClick}
                                        className="btn btn-outline-dark bg-primary text-white mx-auto btn-lg"
                                         />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </React.Fragment>
    )
};

export default PasswordGenerator;