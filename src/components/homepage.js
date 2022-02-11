import Select from './select'

function Homepage() {
  const styles = {
    homepage: {
      height: '100vh',
      backgroundColor: '#2C3333',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }
  return (
    <div className="homepage" style={styles.homepage}>
      <Select />
    </div>
  );
}

export default Homepage;
