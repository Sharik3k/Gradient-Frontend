import React from 'react';
import styled from 'styled-components';
import { FiUser } from 'react-icons/fi';

const SidebarContainer = styled.aside`
  width: 280px;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
  align-self: flex-start;
  position: sticky;
  top: 1.5rem;
  margin: 1.5rem 1.5rem 1.5rem 0;
`;

const Title = styled.h3`
  color: #f0f0f0;
  margin-bottom: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.3px;
`;

const ManagerList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ManagerItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 1rem;
  padding: 0.5rem 0.25rem;
  border-radius: 12px;
  background: transparent;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f1f3f6;
  margin-right: 0.25rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.06);
`;

const StatusIndicator = styled.span`
  position: absolute;
  top: 50%;
  right: -2px;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #1b1c2f;
  background-color: ${props => (props.status === 'online' ? '#21ff00' : props.status === 'away' ? '#9ca3af' : '#dc3545')};
`;

const ManagerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin: 0;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
  }
`;

const managers = [
  { name: 'Ярослав Коваль', status: 'online' },
  { name: 'Олексій Крупа', status: 'online' },
  { name: 'Анна Вовк', status: 'offline' },
  { name: 'Вікторія Шишка', status: 'away' },
];

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Title>Менеджери</Title>
      <ManagerList>
        {managers.map((manager, index) => (
          <ManagerItem key={index}>
            <Avatar>
              <FiUser size={22} color="#1b1c2f" />
              <StatusIndicator status={manager.status} />
            </Avatar>
            <ManagerInfo>
              <p>{manager.name}</p>
            </ManagerInfo>
          </ManagerItem>
        ))}
      </ManagerList>
    </SidebarContainer>
  );
};

export default Sidebar;
