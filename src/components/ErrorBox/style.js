import styled from 'styled-components';

export const Container = styled.div`
  height: 42px;
  line-height: 42px;
  margin: 20px 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ff4c4c;
  color: rgba(0, 0, 0, 0.6);
  font-size: 13px;
  border-radius: 3px;
  padding: 0 20px;
  button {
    background: transparent;
    border: 0;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.6);
    font-weight: bold;
    cursor: pointer;
  }
`;
