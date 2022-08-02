import { Header } from "./components/Header"
import {Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/m4zeboy.png',
      name: 'Moises Silva',
      role: 'Estagiário'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portefólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jame.design/doctorcare',},
    ],
    publishedAt: new Date('2022-07-25 18:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/AntonioSilvaAzevedo.png',
      name: 'Antonio Carlos',
      role: 'Dev'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portefólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jose.design/doctorcare',},
    ],
    publishedAt: new Date('2022-07-24 18:00:00'),
  },
]

export function App() {
 return (
  <div>
    <Header />

    <div className={styles.wrapper}>
      <aside>
        <Sidebar />
      </aside>
      <main>
        {posts.map(post => {
          return (
          <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
          )
        })}        
      </main>
    </div>
      
  </div>
  
 )
}
