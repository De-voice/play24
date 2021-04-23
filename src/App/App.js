import React, { useEffect, useState } from 'react'
import Player from '../components/Player'

function App() {
	const [songs] = useState([
		{
			title: " Zoom",
			artist: "Cheque",
			img_src: "./images/img1.jpg",
			src: "./songs/y2mate.com - Cheque   Zoom Lyrics Video Naijahotstars.mp3"
		},
		{
			title: " BELONGS TO YOU",
			artist: "CHRIS SHALOMPOWER",
			img_src: "./images/img2.jpg",
			src: "./songs/y2mate.com - CHRIS SHALOMPOWER BELONGS TO YOU official audio   skiza7631179 to 811.mp3"
		},
		{
			title: "Fix You",
			artist: "Coldplay",
			img_src: "./images/img3.jpg",
			src: "./songs/y2mate.com - Coldplay - Fix You_k4V3Mo61fJM.mp3"
		},
		{
			title: "Halleluyah",
			artist: "David G",
			img_src: "./images/img4.jpg",
			src: "./songs/y2mate.com - David G  Halleluyah  Latest 2017 Nigerian Gospel Song.mp3"
		},
		{
			title: "Life for Rent",
			artist: "Dido",
			img_src: "./images/img5.jpg",
			src: "./songs/y2mate.com - Dido  Life for Rent Official Music Video.mp3"
		},
			{
			title: "God's plan",
			artist: "Drake",
			img_src: "./images/img5.jpg",
			src: "./songs/Drake  Gods Plan.mp3"
		},
			{
			title: "Campanion",
			artist: "Fireboy",
			img_src: "./images/img5.jpg",
			src: "./songs/y2mate.com - Fireboy .mp3"
		}
	])

	const [currentSongIndex,setCurrentSongIndex] = useState(0);
	const [nextSongIndex,setNextSongIndex] = useState(0);


	useEffect(() => {
		setNextSongIndex(() => {
			if(currentSongIndex + 1 > songs.length - 1) {
				return 0
			} else {
				return currentSongIndex + 1
			}
		})
	}, [currentSongIndex,songs.length])

	return (
		<div className = "app">
		<Player currentSongIndex = {currentSongIndex}
		setCurrentSongIndex = { setCurrentSongIndex}
		nextSongIndex = {nextSongIndex}
		songs = {songs}
		/>
		</div>
	)
}

export default App
