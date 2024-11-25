import Hotel from '../models/Hotel.js';
import { findCategory } from '../utils/hotelCategories.js'; 
export const createHotel = async (req, res) => {
    try {
        const { name, description, ...otherData } = req.body;
        const category = await findCategory(name, description);
        
        const hotel = await Hotel.create({ ...otherData, name, description, category });
        return res.status(201).json(hotel);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao criar hotel', error });
    }
};

export const updateHotel = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, ...otherData } = req.body;
        const category = await findCategory(name, description);
        
        const hotel = await Hotel.findByPk(id);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel não encontrado' });
        }

        await hotel.update({ ...otherData, name, description, category });
        return res.status(200).json(hotel);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao atualizar hotel', error });
    }
};

export const getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.findAll();
        return res.status(200).json(hotels);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar hotéis', error });
    }
};

export const getAllHotelsByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const hotels = await Hotel.findAll({ where: { category } });
        return res.status(200).json(hotels);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar hotéis', error });
    }
};
export const getAllHotelsByCity = async (req, res) => {
    try {
        const { city } = req.params;
        const hotels = await Hotel.findAll({ where: { city } });
        return res.status(200).json(hotels);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar hotéis', error });
    }
};

export const getAllHotelsByCategoryAndCity = async (req, res) => {
    try {
        const { category, city } = req.params;
        const hotels = await Hotel.findAll({ where: { category, city } });
        return res.status(200).json(hotels);
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao buscar hotéis', error });
    }
};

export const deleteHotelById = async (req, res) => {
    try {
        const { id } = req.params;
        const hotel = await Hotel.destroy({ where: { id } });

        if (!hotel) {
            return res.status(404).json({ message: 'Hotel não encontrado' });
        }

        return res.status(200).json({ message: 'Hotel deletado com sucesso' });
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao deletar hotel', error });
    }
};

