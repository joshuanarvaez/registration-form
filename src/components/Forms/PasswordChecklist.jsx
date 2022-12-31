import React from "react"
import PasswordChecklist from "react-password-checklist"

const PasswordCheckList = ({ password, confirmPassword, onChange }) => {
	return (
		<PasswordChecklist
			rules={["minLength", "specialChar", "number", "capital", "match"]}
			minLength={7}
			value={password}
			valueAgain={confirmPassword}
			messages={{
				minLength: "Password length",
				specialChar: "Password includes special characters",
				number: "Password includes number",
				capital: "Password includes uppercase letter",
				match: "Passwords match",
			}}
			onChange={onChange} />
	)
}

export default PasswordCheckList;
