import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

function GoalForm() {
	const [text, setText] = useState("");

	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(createGoal({ text }));
		setText("");
	};
	const onChange = (e) => {
		setText(e.target.value);
	};
	return (
		<section>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="text"> Goal</label>
					<input
						type="text"
						name="text"
						id="text"
						value={text}
						onChange={onChange}
					/>
				</div>
				<div className="form-group">
					<button className="btn btn-block" typeof="submit">
						Add Goal
					</button>
				</div>
			</form>
		</section>
	);
}

export default GoalForm;
