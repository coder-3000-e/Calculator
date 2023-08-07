import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../data/store';
import { absolute_difference, addition, angle_btw_vectors, angle_regular_polygon, arc_length, area_of_Triangle, area_of_circle, area_of_circle_given_center_and_pointarea_of_triangle, arithmetic_progression_sum, arithmetic_progression_term, base_conversion, basicAlgebra } from '../data/actions';
import './styles/mathProblemGenerator.css';

const MathProblemGeneratorPage: React.FC = () => {
    const dispatch = useDispatch();

    const problem = useSelector(
        (state: State) => state.calculations.problem
    );

    const solution = useSelector(
        (state: State) => state.calculations.solution
    );

    return (
        <div className="math-problem-container">
            <div className="buttonContainer">
                <button className="button" onClick={() => dispatch(basicAlgebra())}>Basic Algebra</button>
                <button className="button" onClick={() => dispatch(addition())}>Addition</button>
                <button className="button" onClick={() => dispatch(absolute_difference())}>Absolute Difference</button>
                <button className="button" onClick={() => dispatch(angle_btw_vectors())}>Angle Btw Vectors</button>
                <button className="button" onClick={() => dispatch(angle_regular_polygon())}>Angle Regular Polygon</button>
                <button className="button" onClick={() => dispatch(arc_length())}>Arc Length</button>
                <button className="button" onClick={() => dispatch(area_of_circle())}>Area Of Circle</button>
                <button className="button" onClick={() => dispatch(area_of_Triangle())}>Area Of Triangle</button>
                <button className="button" onClick={() => dispatch(area_of_circle_given_center_and_pointarea_of_triangle())}>Area Of Circle Given Center And Pointarea Of Triangle</button>
                <button className="button" onClick={() => dispatch(arithmetic_progression_sum())}>Arithmetic Progression Sum</button>
                <button className="button" onClick={() => dispatch(arithmetic_progression_term())}>Arithmetic Progression Term</button>
                <button className="button" onClick={() => dispatch(base_conversion())}>Base Conversion</button>
            </div>
            <div className="memoContainer">
                <p>Problem: {problem}</p>
                <p>Solution: {solution}</p>
            </div>
        </div>
    );
};

export default MathProblemGeneratorPage;
