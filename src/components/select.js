import anime from 'animejs'
import { useEffect } from 'react'

function Select() {
    const styles = {
        animalsContainer: {
            width: '80%',
            display: 'flex',
            margin: '0',
            padding: '0',
        },
        allTypes: {
            border: '1px solid black',
        },
        water: {
           backgroundImage: `url("https://wallpapercave.com/wp/wp2459897.jpg")`,
           backgroundSize: 'cover',
           borderBottomLeftRadius: '10px',
           borderTopLeftRadius: '10px'
        },
        jungle: {
            backgroundImage: `url("https://www.pixel4k.com/wp-content/uploads/2018/03/Bengal%20Tiger%20in%20Jungle548888426.jpg")`,
            backgroundSize: 'cover'
        },
        flying: {
            backgroundImage: `url("https://wallpaper.dog/large/20458464.jpg")`,
            backgroundSize: 'cover'
        },
        grassland: {
            backgroundImage: `url("https://c4.wallpaperflare.com/wallpaper/329/532/42/wildlife-grassland-zebra-wild-animals-wallpaper-preview.jpg")`,
            backgroundSize: 'cover',
            borderBottomRightRadius: '10px',
            borderTopRightRadius: '10px'
        },
        text: {
            selectorTitle: {
                color: 'white',
                fontSize: 'xxx-large',
                textShadow: '2px 2px 6px Black'
            }
        }
    }

    
    useEffect(() => {
        const els = document.querySelectorAll('.selectors')
        els.forEach(el => {
            el.addEventListener('mouseenter', () => {
            el.style.animation = '.3s growTo100 both'
        })})

        els.forEach(el => {
            el.addEventListener('mouseleave', () => {
                el.style.animation = '.2s shrinkTo25 both'
            })
        })
    })

    return (
        <div style={styles.animalsContainer}>
            <div className="water selectors" style={{...styles.water, ...styles.allTypes}}>
                <h3 style={styles.text.selectorTitle}>Marine Life</h3>
            </div>

            <div className="jungle selectors" style={{...styles.jungle, ...styles.allTypes}}>
                <h3 style={styles.text.selectorTitle}>Jungle</h3>
            </div>

            <div className="selectors" style={{...styles.flying, ...styles.allTypes}}>
                <h3 style={styles.text.selectorTitle}>Flying</h3>
            </div>

            <div className="selectors" style={{...styles.grassland, ...styles.allTypes}}>
                <h3 style={styles.text.selectorTitle}>Grassland</h3>
            </div>
        </div>
    )
}

export default Select