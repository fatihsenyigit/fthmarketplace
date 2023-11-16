// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.9;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";

// contract FATIHToken is ERC721, ERC721Enumerable, ERC721URIStorage, ERC721Burnable, Ownable {
//     using Counters for Counters.Counter;

//     Counters.Counter private _tokenIdCounter;

//     mapping(uint256 => NFT) public nftsForSale;

//     struct NFT {
//         uint256 tokenId;
//         address seller;
//         address buyer;
//         uint256 price;
//         bool isForSale;
//     }

//     constructor() ERC721("FTHToken", "FTH") {}

//     function safeMint(address to, string memory uri) public onlyOwner {
//         uint256 tokenId = _tokenIdCounter.current();
//         _tokenIdCounter.increment();
//         _safeMint(to, tokenId);
//         _setTokenURI(tokenId, uri);
//         nftsForSale[tokenId] = NFT(tokenId, msg.sender, address(0), 0, false);
//     }

//     function listNFTForSale(uint256 tokenId, uint256 price) public {
//         require(msg.sender == ownerOf(tokenId), "You must own the NFT to list it for sale");
//         nftsForSale[tokenId].isForSale = true;
//         nftsForSale[tokenId].price = price;
//     }

//     // The following functions are overrides required by Solidity.

//     function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
//         internal
//         override(ERC721, ERC721Enumerable)
//     {
//         super._beforeTokenTransfer(from, to, tokenId, batchSize);
//     }

//     function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
//         super._burn(tokenId);
//     }

//     function tokenURI(uint256 tokenId)
//         public
//         view
//         override(ERC721, ERC721URIStorage)
//         returns (string memory)
//     {
//         return super.tokenURI(tokenId);
//     }

//     function buyNFT(uint256 tokenId) public payable {
//         require(nftsForSale[tokenId].isForSale, "NFT is not for sale");
//         require(msg.value >= nftsForSale[tokenId].price, "Insufficient funds");

//         // Transfer the NFT to the buyer
//         _transfer(nftsForSale[tokenId].seller, msg.sender, tokenId);

//         // Pay the seller
//         payable(nftsForSale[tokenId].seller).transfer(msg.value);

//         // Mark the NFT as sold
//         nftsForSale[tokenId].isForSale = false;
//     }


//     function supportsInterface(bytes4 interfaceId)
//         public
//         view
//         override(ERC721, ERC721Enumerable, ERC721URIStorage)
//         returns (bool)
//     {
//         return super.supportsInterface(interfaceId);
//     }

//      function filterNFTs(string[] memory filters) public view returns (NFT[] memory) {
//         // Implement this function to filter and search for NFTs based on the given filters
//     }
// }