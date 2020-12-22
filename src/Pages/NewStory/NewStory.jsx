import React,{useState} from 'react';
import './newStory.scss';
import RichTextEditor from 'react-rte';
import { readingTime } from 'reading-time-estimator';
import useStories from '../../CustomHooks/useStories';

function NewStory({user}) {

    const [value, setvalue] = useState(RichTextEditor.createEmptyValue())
    const [time, setTime] = useState({})
    const [title, setTitle] = useState('')
    const id = Math.random().toString(36).slice(2)

    const [publish] = useStories(id,title,time.text,value.toString('html'),user)

    const onChange = (value) => {
        setvalue(value)
        setTime(readingTime(value.toString('html'), 10))
        console.log(time)
    }

    const toolbarConfig = {
        // Optionally specify the groups to display (displayed in the order listed).
        display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS','IMAGE_BUTTON', 'BLOCK_TYPE_DROPDOWN'],
        INLINE_STYLE_BUTTONS: [
          {label: 'Bold', style: 'BOLD', className: 'editor-buttons'},
          {label: 'Italic', style: 'ITALIC',className: 'editor-buttons'},
          {label: 'Underline', style: 'UNDERLINE',className: 'editor-buttons'}
        ],
        BLOCK_TYPE_DROPDOWN: [
          {label: 'Normal', style: 'unstyled'},
          {label: 'Medium', style: 'header-three'},
          {label: 'Large', style: 'header-two'},
          {label: 'Extra Large', style: 'header-one'}
        ],
        BLOCK_TYPE_BUTTONS: [
          {label: 'UL', style: 'unordered-list-item',className: 'editor-buttons'},
          {label: 'OL', style: 'ordered-list-item',className: 'editor-buttons'}
        ],
        IMAGE_BUTTON: [
            {label: 'Hello', style: 'image',className: 'editor-buttons'}
        ]
      };

    return (
        <div className='new-story'>
            <h2>New Story</h2>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} maxLength='40' placeholder='Title' className='newstory-title' />
            <RichTextEditor
                value={value}
                onChange={onChange}
                toolbarConfig={toolbarConfig}
            />
            {
                time.minutes>0 && <div className='editor-time'>{time.text}</div>
            }
            {/* <div className='newstories-show' dangerouslySetInnerHTML={{__html: value.toString('html')}} /> */}
            { 
                title !== '' && time.minutes>0  && user && <button onClick={publish} className='new-story-button'>Publish</button>
            }
        </div>
    )
}

export default NewStory
