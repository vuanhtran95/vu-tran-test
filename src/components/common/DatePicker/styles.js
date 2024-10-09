import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import { SPACING } from "shared";

export const DateIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 15px;
  color: #aaa;
  font-size: 18px;
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding-left: ${props => (props.hasIcon ? SPACING.XL : 0)};
  border: 1px solid #8c9196;
  border-radius: 5px;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  border-radius: 5px;
  display: flex;
`;

export const StyledCalendarInput = styled.input`
  height: 25px;
  width: 100%;
  padding-left: ${props => (props.hasIcon ? SPACING.XL : 0)};
  border: 1px solid #8c9196;
  border-radius: 5px;
  padding-left: ${SPACING.L};
`;
