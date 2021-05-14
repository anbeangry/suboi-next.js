import Button from "@element/Button/Button";

function HomePage() {
  return <div>
    <h3>Elements</h3>
    <div style={{
      display: 'flex',
      width: '100%',
      justifyContent: 'center'
    }}>
      <Button
        label="PLAY VIDEO"
        margin={'10px 10px 10px 10px'}
      />
      <br/>
      <Button
        label="BUY VIDEO"
        redBg
        margin={'10px 10px 10px 10px'}
      />
    </div>
  </div>
}

export default HomePage
