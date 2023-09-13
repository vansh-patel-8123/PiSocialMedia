const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const User = require('../models/User');

const registerUser = async (req, res) => {
    // data from req
    const { email, password, firstName, lastName, picturePath, friends, location, occupation } = req.body;

    try {
        // Is already register ? Check in DB
        const isAlreadyExists = await User.findOne({ email });
        if (isAlreadyExists) {
            return res.status(400).json({
                message: 'Email is already registered'
            });
        }


        // Encode password to Hash value
        const hashedPassword = await bcryptjs.hash(password, 10);


        // Create User model
        const newUser = new User({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName,
            picturePath: picturePath,
            location: location,
            occupation: occupation,
        })


        // Store in DB
        await newUser.save();


        // Generate token
        // Create a payload containing the user data
        const payload = {
            userId: newUser.id,
            email: newUser.email,
            name: newUser.firstName,
        };

        // Sign the payload with the secret key to generate the token
        const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '7d' }); // Token expires in 7 day


        return res.status(201).json({ message: 'User registered successfully', token });

    } catch (error) {

        return res.status(500).json({ message: 'An error occurred' });
    }
};

const loginUser = async (req, res) => {
    // data for Req
    const { email, password } = req.body;

    try {
        // check user is already register
        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(401).json({ message: 'User does not exists! Register user' });
        }


        // compare password
        const passwordMatch = await bcryptjs.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Authentication failed' });
        }


        // Generate token
        // Create a JWT token and send it in the response
        const payload = {
            userId: user._id,
            email: user.email,
            name: user.firstName,
        };

        console.log(payload);
        // Sign the payload with the secret key to generate the token
        const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: '7d' }); // Token expires in 7 day

        return res.status(200).json({ message: 'User login successfully', token });
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred' });
    }
};

module.exports = {
    registerUser,
    loginUser
}