import React from 'react';
import Button from 'elements/Button/Button';

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
      <div style={{
        width: '155px',
        height: '24px',
        margin: 10,
      }}>
        <Button
          label="Default"
        />
      </div>
      <br />
      <div style={{
        width: '155px',
        height: '24px',
        margin: 10,
      }}>
        <Button
          label="PLAY VIDEO"
          margin={'10px 10px 10px 10px'}
          background="transparent"
        />
      </div>
      <br />
      <div style={{
        width: '155px',
        height: '24px',
        margin: 10,
      }}>
        <Button
          label="BUY VIDEO"
          margin={'10px 10px 10px 10px'}
          background="red"
        />
      </div>
    </div>
  </div>;
}

export default HomePage;
