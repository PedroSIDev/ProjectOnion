class IUserRepository {
  /**
   * @param {Object} userData
   * @returns {Promise<Object>}
   */
  async create(userData) {
    throw new Error('Method not implemented');
  }

  /**
   * @param {string} email
   * @returns {Promise<Object|null>}
   */
  async findByEmail(email) {
    throw new Error('Method not implemented');
  }

  /**
   * @param {string} id
   * @returns {Promise<Object|null>}
   */
  async findById(id) {
    throw new Error('Method not implemented');
  }
}

module.exports = IUserRepository;