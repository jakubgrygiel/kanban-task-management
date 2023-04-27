import styled from "styled-components";
import ModalWrapper from "./ModalWrapper";
import MoreBtn from "../ui/MoreBtn";
import EditTaskBtn from "./EditTaskBtn";
import DeleteTaskBtn from "./DeleteTaskBtn";
import StatusInput from "./StatusInput";

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ModalTitle = styled.h3`
  font-size: 1.125rem;
`;

const Description = styled.p`
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

interface ITaskModalProps {}

export default function TaskModal() {
  return (
    <ModalWrapper>
      <TopWrapper>
        <ModalTitle>
          Research pricing points of various competitors and trial different
          business models
        </ModalTitle>
        <MoreBtn>
          <EditTaskBtn />
          <DeleteTaskBtn />
        </MoreBtn>
      </TopWrapper>
      <Description>
        We know what we're planning to build for version one. Now we need to
        finalise the first pricing model we'll use. Keep iterating the subtasks
        until we have a coherent proposition.
      </Description>
      <StatusInput name="Status" id="status" />
    </ModalWrapper>
  );
}
