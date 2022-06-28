import { RequestHandler } from 'express';

import Video from '../models/Video'

export const getVideos: RequestHandler = async ( req, res ) => {

	try {
		const videos = await Video.find();
		res.status(200).json(videos);
	} catch (error) {
		res.status(500).json(error)
	}
}

export const getVideo: RequestHandler = async ( req, res ) => {

	const video = await Video.findById(req.params.id);

	if ( !video ) 
		return res.status(401).json({ message: 'The video doesn\'t exist' });

	res.status(200).json(video);
}

export const createVideo: RequestHandler = async ( req, res ) => {
	const videoFound = await Video.findOne({url: req.body.url});

	if ( videoFound )
		return res.status(301).json({ message: 'The URL already exist' });

	const video = new Video(req.body);
	const savedVideo = await video.save();

	res.status(200).json(savedVideo);
}

export const updateVideo: RequestHandler = async ( req, res ) => {
	// opt new = true return a object updated, else return old object
	const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true })

	if ( !videoUpdated )
		return res.status(401).json({ message: 'The video doesn\'t exist' });

	res.status(200).json(videoUpdated);
}

export const deleteVideo: RequestHandler = async ( req, res ) => {
	const video = await Video.findByIdAndDelete(req.params.id);

	if ( !video ) 
		return res.status(401).json({message: 'The video doesn\'t exist'});

	res.status(200).json(video);
}
