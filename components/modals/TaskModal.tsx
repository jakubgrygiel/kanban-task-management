import styled from "styled-components";
import ModalWrapper from "../ui/ModalWrapper";
import MoreBtn from "../ui/MoreBtn";
import EditTaskBtn from "./EditTaskBtn";
import DeleteTaskBtn from "./DeleteTaskBtn";
import StatusInput from "./StatusInput";
import Subtasks from "./Subtasks";
import useTaskCRUD from "@/hooks/crud-hooks/useTaskCRUD";

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

export default function TaskModal() {
  const { task, updateStatus } = useTaskCRUD();

  return (
    <>
      {task ? (
        <ModalWrapper>
          <TopWrapper>
            <ModalTitle>{task.title}</ModalTitle>
            <MoreBtn>
              <EditTaskBtn />
              <DeleteTaskBtn />
            </MoreBtn>
          </TopWrapper>
          <Description>{task.description}</Description>
          <Subtasks content={task.subtasks} />
          <StatusInput
            name="Status"
            id="status"
            status={task.status}
            changeStatus={updateStatus}
            type="info"
          />
        </ModalWrapper>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}
