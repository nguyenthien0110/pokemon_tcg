import React, { useState } from 'react'
import Select, { SingleValue } from 'react-select'
import usePokemonSearch from '../../hooks/usePokemonSearch'
import Modal from 'react-modal'

const SearchPage = () => {
  const { cardOptions, selectedCard, handleSelect, cardData, error } = usePokemonSearch()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')

  const openModal = (imageUrl: React.SetStateAction<string>) => {
    setModalImage(imageUrl)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setModalImage('')
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Search for Pokémon Card</h1>
      <div className='flex items-center mb-4'>
        <Select
          options={cardOptions.map(option => ({
            value: option.id,
            label: `${option.name} (${option.id})`,
          }))}
          value={
            selectedCard
              ? { value: selectedCard.id, label: `${selectedCard.name} (${selectedCard.id})` }
              : null
          }
          onChange={(option: SingleValue<{ value: string; label: string }>) =>
            handleSelect(option ? { id: option.value, name: option.label.split(' (')[0] } : null)
          }
          placeholder='Search for a Pokémon card'
          isClearable
        />
      </div>

      {error && <p className='text-red-500 mt-4'>{error}</p>}

      {cardData && (
        <div className='grid grid-cols-4 gap-4 mt-4'>
          <div>
            <h2 className='text-xl font-bold'>{cardData.name}</h2>
            <p>HP: {cardData.hp}</p>
            <p>Type: {cardData.types.join(', ')}</p>
          </div>
          <div className='flex justify-center'>
            <img
              src={cardData.images.large}
              alt={cardData.name}
              className='max-w-full h-auto cursor-pointer'
              onClick={() => openModal(cardData.images.large)}
            />
          </div>
        </div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Image Modal'
        className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-80'
        overlayClassName='fixed inset-0'
      >
        <div className='relative w-full h-full flex items-center justify-center'>
          <button onClick={closeModal} className='absolute top-4 right-4 text-white text-xl'>
            X
          </button>
          <img
            src={modalImage}
            alt='Pokémon Card'
            className='max-w-full max-h-full object-contain'
            onClick={closeModal}
          />
        </div>
      </Modal>
    </div>
  )
}

export default SearchPage
