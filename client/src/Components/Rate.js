import { useState } from "react";
import { FaStar} from "react-icons/fa";
import styled from "styled-components";





const Rate = () => {
    const colors = {
        orange: "FFBA5A",
        grey: "a9a9a9"
    };
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0);

    const handleClick = (value) => {

        setCurrentValue(value);

    };

    const handleMouseOver = (value) => {

        setHoverValue(value);

    }

    const handleMouseOut = () => {

        setHoverValue(undefined);
    }

    return (

        <Wrapper>
        
            <Title>Rate</Title>
            <Stars>
                {stars.map((_, index)=>{
                    return(
                        <FaStar
                        key={index}
                        color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                        onClick={()=> handleClick(index + 1)}
                        />
                    )
                })}
            </Stars>

        </Wrapper>
    )


};

export default Rate;

const Wrapper = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`;

const Title = styled.h2`

`;

const Stars = styled.div`
display:flex;
gap:10px;
cursor: pointer;
`;
