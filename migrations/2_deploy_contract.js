const Fomo3d = artifacts.require('./Fomo3d.sol')

module.exports = async function(deployer) {
  await deployer.deploy(Fomo3d)
}
