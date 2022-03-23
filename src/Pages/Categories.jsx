import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #0290ff;
  border: none;
  outline: none;
  border-radius: 4px;
  color: #fff;
  padding: 0.801rem 1.188rem 0.886rem 1.375rem;
  box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.05);
  font-weight: 600;
  cursor: pointer;
`;

function Categories() {
  return (
    <div style={{ color: 'red', marginTop: '10rem', fontSize: '2rem' }}>
      <Button>Check Status</Button>
    </div>
  );
}

export default Categories;
