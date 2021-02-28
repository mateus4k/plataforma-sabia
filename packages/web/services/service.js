import { apiDelete, apiGet, apiPost } from './api';

/**
 * GETs all services
 *
 * @param {object} options Optional params sent in the request
 * @returns {Array} The services ata
 */
export const getServices = async (options = {}) => {
	const response = await apiGet('services', { embed: true, ...options });

	if (response.status !== 200) {
		return [];
	}

	return response.data;
};

/**
 * Creates a service order
 *
 * @param {Array} servicesToCreate Array of services to create order
 * @param {string} comment Comments to send with the order
 * @returns {object} The services that was bought
 */
export const createServiceOrder = async (servicesToCreate, comment) => {
	const response = await apiPost('services/orders', { services: servicesToCreate, comment });

	if (response.status !== 200) {
		return false;
	}

	return response.data;
};

/**
 * Creates a new service
 *
 * @param {object} serviceData Service needed data to create
 * @returns {object} Created service
 */
export const createService = async (serviceData) => {
	if (!serviceData) return false;

	const response = await apiPost('services', { ...serviceData });

	if (response.status !== 200) return false;

	return response.data;
};

/**
 * Deletes a service by id
 *
 * @param {number} serviceId The service id
 */
export const deleteService = async (serviceId) => {
	if (!serviceId) return false;

	const response = await apiDelete(`services/${serviceId}`);

	if (response.status !== 200) return false;

	return response.data;
};
