import anime from 'animejs'

function Select() {
    const styles = {
        animalsContainer: {
            width: '75%',
            display: 'flex',
            margin: '0',
            padding: '0'
        },
        water: {
           
        },
        jungle: {
            backgroundColor: 'green'
        },
        flying: {
            backgroundColor: '#F0F8FF'
        },
        grassland: {
            backgroundColor: 'lightGreen'
        }
    }

    const maxWidth = () => {

    }

    return (
        <div style={styles.animalsContainer}>
            <div className="water selectors" onMouseOver={maxWidth} style={{...styles.water, ...styles.allTypes}}>
                <h3>Water</h3>
            </div>

            <div className="selectors" style={{...styles.jungle, ...styles.allTypes}}>
                <h3>Jungle</h3>
            </div>

            <div className="selectors" style={{...styles.flying, ...styles.allTypes}}>
                <h3>Flying</h3>
            </div>

            <div className="selectors" style={{...styles.grassland, ...styles.allTypes}}>
                <h3>Grassland</h3>
            </div>
        </div>
    )
}

export default Select