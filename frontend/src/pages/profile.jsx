import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { useUserContext } from '../components/context/userContext'
import Header from '../components/pure/header'
import { httpsRequest } from '../assets/config/axios'

import '../styles/profile.css'
import { IoPersonSharp } from 'react-icons/io5'


const Profile = () => {

  const MySwal = withReactContent(Swal)
  const { register, handleSubmit } = useForm()
  const { client } = useUserContext()

  const uploadRef = useRef()

  const uploadFiles = () => {
    uploadRef.current.click()
  }

  const [preview, setPreview] = useState(null)
  const [image, setImage] = useState("")

  const previewImages = (element) => {

    const file = element.target.files[0]
    if (file && file.type.substring(0, 5) === 'image') {
      setPreview(file)
    } else {
      setPreview(null)
    }

  }

  useEffect(() => {

    if (preview) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result.toString())
      }
      reader.readAsDataURL(preview)
    } else {
      setImage('')
    }

  }, [preview])

  const changeData = (data) => {
    console.log(uploadRef)
    // try {
    //   httpsRequest(
    //     'put',
    //     'http://localhost:5000/api/updateprofile',
    //     {
    //       ...data,
    //       image: image
    //     }
    //     )
    //   console.log('Los cambios se realizaron')
    // } catch (error) {
    //   MySwal.fire({
    //     icon: 'error',
    //     title: 'Oops',
    //     text: error
    //   })
    // }
  }

  return (

    <div>
      <Header title='Profile' id='space' show={true} />
      <main className='profile-container'>

        <section className='profile-user'>
          {client.user.image ?
            <img src={client.user.image} alt='User image' />
            :
            image ?
              <img src={image} alt='User image' />
              :
              (
                <div className='bg-image'>
                  <IoPersonSharp className='icon-image' />
                </div>
              )
          }
          <div>
            <input type='file' accept='image/*' ref={uploadRef} onChange={previewImages} />
            <button className='file-btn' onClick={uploadFiles}>Subir imagen</button>
            <p>Suba una imagen para su perfil</p>
          </div>

        </section>
        <section className='profile-data'>
          <form className='data-form' onSubmit={handleSubmit(changeData)}>
            <input
              type='text'
              value={`${client.user.name} ${client.user.surname}`}
              {...register('name')}
            />
            <input
              type='email'
              value={client.user.email}
              {...register('email')}
            />
            <input
              type='text'
              placeholder='Documento'
              {...register('dni')}
            />
            <input
              type='text'
              placeholder='País'
              {...register('country')}
            />
            <input
              type='text'
              placeholder='Ciudad'
              {...register('city')}
            />
            <input
              type='text'
              placeholder='Dirección'
              {...register('address')}
            />
            <input
              type='number'
              placeholder='Código postal'
              {...register('zipCode')}
            />

            <button type='submit' className='data-sub'>Guardar cambios</button>
          </form>
        </section>

      </main>
    </div>
  )
}

export default Profile
