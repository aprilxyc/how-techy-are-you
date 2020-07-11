import React from 'react';
import styled from 'styled-components';


const CheckboxContainer = styled.div`
    display: inline-block;
    float  : right;
`;

const TickIcon = styled.div`
    .checkmark {
        vertical-align: middle;
        font-size     : 20px;
        height        : 30px;
    }
`;

const StyledCheckbox = styled.div`
    width        : 20px;
    height       : 20px;
    border-radius: 20px;
    box-shadow   : 0 0 0 3px pink;
    transition   : all 200ms;

    ${TickIcon} {
        vertical-align: middle;
        line-height   : 40px;
        visibility    : ${props => (props.checked ? 'visible' : 'hidden')};
    }
`;

// adds the attribute checkbox
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border     : 0;
    clip       : rect(0 0 0 0);
    clippath   : inset(50%);
    height     : 1px;
    clip       : rect(0 0 0 0);
    margin     : -1px;
    overflow   : hidden;
    padding    : 0;
    position   : absolute;
    white-space: nowrap;
    width      : 1px;
`;

const Checkbox = ({ className, checked, ...props }) => (
    <CheckboxContainer>
            <HiddenCheckbox checked={checked} {...props}/>
                <StyledCheckbox checked={checked} {...props}>
                    <TickIcon>
                        <i className="checkmark" class="fas fa-check-circle"></i>
                    </TickIcon>
                </StyledCheckbox>
    </CheckboxContainer>
)

export default Checkbox;

