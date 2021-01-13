import React from 'react';
import './Story.css';
import StoryComponent from './storyComponent';

function Story() {
    return (
        <div className="Story">
            {/* storyComponents */}
            <StoryComponent image="https://th.bing.com/th/id/OIP.QzOtTrWJ3-riXiQM2jx74gHaLH?pid=Api&rs=1" profileSrc="https://thumbs.dreamstime.com/z/handsome-man-getting-ready-morning-18382492.jpg" title="Alok Kumar"/>
            <StoryComponent image="https://cdn.shopify.com/s/files/1/0162/2116/files/Mens_fall_outfit_ideas_for_men_2.jpg?v=1507006123" profileSrc="https://th.bing.com/th/id/OIP.uZkv3udwdgOBUJR92MiZCgAAAA?pid=Api&rs=1" title="Ash Aman"/>
            <StoryComponent image="http://www.stylesofman.com/wp-content/uploads/2017/11/52.jpg" profileSrc="https://4.bp.blogspot.com/-NZ1EVf8Fd2I/W6eoY9wQo9I/AAAAAAAAAQs/zEccJEbq608kYf-nzgt10WGdDW-136WVgCEwYBhgL/s1600/flannels%2Baround%2Bwaist.jpg" title="kumar Aryan"/>
            <StoryComponent image="https://fashionjackson.com/wp-content/uploads/2016/11/DSC0232.jpg" profileSrc="https://th.bing.com/th/id/OIP.E7LXRyyBryE1ZlKJONnVJgHaLH?pid=Api&w=800&h=1200&rs=1" title="Akash Kumar"/>
            <StoryComponent image="https://i.pinimg.com/originals/63/f0/1d/63f01de8f0a7a3e027666bc267008332.jpg" profileSrc="https://th.bing.com/th/id/OIP.NqQV4YnG1Mp53PqBL_Ex0wHaLJ?pid=Api&w=498&h=750&rs=1" title="Sonu Gupta"/>
            
            

        </div>
    )
}

export default Story
