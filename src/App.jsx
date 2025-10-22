import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';

const easyWords = [
  "cat", "dog", "sun", "book", "pen", "hat", "ball", "cup", "car", "tree",
  "home", "fish", "milk", "rain", "star", "run", "red", "blue", "jump", "girl",
  "boy", "ice", "bird", "apple", "desk", "door", "shoe", "bag", "toy", "cake",
  "happy", "baby", "smile", "walk", "play", "game", "clock", "water", "food", "leaf",
  "wind", "road", "lamp", "note", "song", "ring", "fork", "spoon", "cloud", "chair",
  "key", "light", "bed", "floor", "glass", "plant", "box", "paper", "book", "mouse",
  "window", "phone", "room", "hat", "pen", "map", "egg", "cup", "fan", "bell",
  "frog", "nest", "snow", "hill", "river", "boat", "sand", "rope", "net", "tree",
  "star", "sky", "rock", "clap", "train", "plane", "bike", "bus", "drive", "clean",
  "open", "close", "stand", "sit", "jump", "run", "look", "see", "cook", "read"
];

const mediumWords = [
  "animal", "bridge", "camera", "danger", "effort", "family", "garden", "handle", "invite", "jungle",
  "laptop", "moment", "number", "object", "people", "quartz", "rescue", "school", "travel", "unique",
  "vacuum", "window", "yellow", "zebra", "beauty", "circle", "damage", "engine", "father", "guitar",
  "honest", "island", "jacket", "kettle", "leader", "market", "nature", "orange", "planet", "quiet",
  "rocket", "silver", "tunnel", "update", "valley", "wealth", "xenial", "yearly", "zigzag", "artist",
  "banana", "castle", "doctor", "energy", "fabric", "gentle", "hunter", "ignore", "jumper", "kitten",
  "lesson", "magnet", "normal", "option", "pencil", "resist", "stream", "temple", "urgent", "vessel"
];

const hardWords = [
  "abnormal", "backward", "cylinder", "dazzling", "efficient", 
  "friction", "gazelle", "horizon", "illusion", "jealousy",
  "knowledge", "language", "magnolia", "narrator", "obedient",
  "parallel", "questionnaire", "rhetoric", "schedule", "tangible",
  "umbrella", "valuable", "withhold", "xylophone", "yielding",
  "zealous", "accuracy", "behavior", "champion", "decipher",
  "equality", "futurism", "grateful", "heritage", "identity",
  "judgment", "kneeling", "lightning", "measured", "nostalgia",
  "occasion", "peculiar", "quantity", "reliable", "strategy",
  "triangle", "universe", "variable", "withdraw", "yearning"
];


function App() {

  return (
    <>
      <div>
          <Navbar/>
        <div className="main">
          
        </div>
      </div>
    </>
  )
}

export default App
