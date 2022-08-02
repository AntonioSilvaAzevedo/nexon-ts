import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment () {
    console.log('delete comment')

    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/EngAlexandreD.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Antonio Carlos</strong>
            <time title='17 de Julho às 12:00' dateTime='2022-07-17 12:01:00'>Publicado há 1h</time>
          </div>

          <button onClick={handleDeleteComment} title='Apagar comentário'>
            <Trash size={24}/>
          </button>
        </header>

          {content}
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
    
  )
}