import React from 'react';
import Button from 'components/elements/Button/Button';

function HomePage() {
  return <div style={{
    background: '#444',
    minHeight: '100vh',
    paddingTop: '100px',
  }}>
    <div style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    }}>
      <Button
        label="Default"
        margin={'10px 10px 10px 10px'}
      />
      <br />
      <Button
        label="PLAY VIDEO"
        margin={'10px 10px 10px 10px'}
        background="transparent"
      />
      <br />
      <Button
        label="BUY VIDEO"
        margin={'10px 10px 10px 10px'}
        background="red"
      />
    </div>
  </div>;
}

export default HomePage;
