import { Stack } from "@mui/system"
import { categories } from '../data/constants'

const Sidebar = ({selectedCategory,setSelectedCategory, lightMode}) => (
    <Stack
        direction='row'
        sx={{
            overflow: 'auto',
            height: { sx: 'auto', md: '95%' },
            flexDirection: { md: 'column' }
        }}
    >
        {categories.map(category => (
            <button
                className="category-btn"
                onClick={()=> setSelectedCategory(category.name)} 
                style={{
                    background: category.name === selectedCategory && '#FC1503'
                }}
                key={category.name}>
                <span style={{
                    color: category.name === selectedCategory ? 'white' : 'red',
                    marginRight: '15px'
                }}>{category.icon}</span>
                <span style={{color:
                    lightMode?'black': 'white'
                }}>{category.name}</span>
            </button>
        ))}
    </Stack>
)

export default Sidebar