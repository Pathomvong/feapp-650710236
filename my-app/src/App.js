import React from 'react';
import Header from './Component/Header'
import MovieList from './Component/MovieList'
import Footer from './Component/Footer'
import Greeting from './Component/Greeting';
import Card from './Component/Card';
import ProfileCard from './Component/ProfileCard';
import './App.css';

const students = [
  { id: 1, name: 'ฝน',   year: 3 },
  { id: 2, name: 'เต้ย', year: 2 },
  { id: 3, name: 'มายด์', year: 4 },
];
const members = [
  { id: 1, name: 'ปฐมวงศ์ วงศ์สาลี', nickname: 'บอส',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },

  { id: 2, name: 'ศิวัช จำรูญศิริรุ่งโรจน์', nickname: 'เติ้ล',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'หมา'] },
];
function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}


export default App;
