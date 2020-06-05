import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const SearchItem = () => (
    <ListItem onClick={toggleDrawer('right', false)} button key={project.id}>
        <ListItemIcon>
            {project.__typename === 'Project' ? <WorkIcon /> : <BookIcon />}
        </ListItemIcon>
        <ListItemText primary={project.name} />
        <ListItemText primary={`${'(claps)'}: ${project.likes}`} />
    </ListItem>
)
