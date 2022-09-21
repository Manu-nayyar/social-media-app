import React from 'react'
import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
            <ChatBubbleIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Chat</span>
            </li>
            <li className="sidebarListItem">
            <EmojiEventsIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
            <SchoolIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Courses</span>
            </li>
            <li className="sidebarListItem">
            <BookmarkIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Bookmarks</span>
            </li>
        </ul>
      </div>
    </div>

  )
}

export default Sidebar