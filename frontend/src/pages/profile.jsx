import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
<<<<<<< HEAD
=======
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e

import { useUserContext } from '../components/context/userContext'
import Header from '../components/pure/header'
import { httpsRequest } from '../assets/config/axios'
<<<<<<< HEAD
import { swalAlert } from '../assets/config/swal'

import '../styles/profile.css'
import {  IoEyeOffOutline, IoEyeOutline, IoPersonSharp } from 'react-icons/io5'
=======

import '../styles/profile.css'
import { IoPersonSharp } from 'react-icons/io5'
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e


const Profile = () => {

<<<<<<< HEAD
  const { register, handleSubmit } = useForm()
  const { user } = useUserContext()
  const [showPass, setShowPass] = useState(false)
=======
  const MySwal = withReactContent(Swal)
  const { register, handleSubmit } = useForm()
  const { client } = useUserContext()
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e

  const uploadRef = useRef()

  const uploadFiles = () => {
    uploadRef.current.click()
  }

  const [preview, setPreview] = useState(null)
  const [image, setImage] = useState("")

  const previewImages = (element) => {

    const file = element.target.files[0]
<<<<<<< HEAD
    if( file && file.type.substring(0,5) === 'image'){
      setPreview(file)
    }else{
=======
    if (file && file.type.substring(0, 5) === 'image') {
      setPreview(file)
    } else {
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
      setPreview(null)
    }

  }

<<<<<<< HEAD
  useEffect( () => {
    
    if(preview){
      const reader = new FileReader()
      reader.onloadend = () =>{
        setImage( reader.result.toString() ) 
      }
      reader.readAsDataURL(preview)
    }else{
=======
  useEffect(() => {

    if (preview) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result.toString())
      }
      reader.readAsDataURL(preview)
    } else {
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
      setImage('')
    }

  }, [preview])

  const changeData = (data) => {
<<<<<<< HEAD
    try {
      httpsRequest(
        'put',
        'http://localhost:5000/api/updateprofile',
        {
          ...data,
          input: uploadRef
        }
        )
    } catch (error) {
      swalAlert('error', 'Oops', error)
    }
  }

  return (
  
    <div>
      <Header title='Profile' id='space' show={true} />
      <main className='profile-container'>
    
        <section className='profile-user'>
          { user.image ? 
              <img src={user.image} alt='User image' />
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
          <div className='div-file'>
            <input type='file' accept='image/*' ref={uploadRef} onChange={ previewImages } />
            <button className='file-btn' onClick={uploadFiles}>Subir imagen</button>
            <p>Suba una imagen para su perfil</p>
          </div>
    
        </section>
        <section className='profile-data'>
          <form className='data-form' onSubmit={ handleSubmit(changeData) }>
            <input 
              className='first'
              type='text' 
              value={user.name}
              {...register('name')}
            />
            <input 
              type='text' 
              value={user.surname}
              style={{ textTransform: 'capitalize'}}
              {...register('surname')}
            />
            <input 
              type='email' 
              value={user.email}
              {...register('email')}
            />
            <div className='pass'>
              <input 
                type={ showPass ? 'text' : 'password' }
                value={user.password}
                {...register('password')}
              />
              { showPass ? 
                (<IoEyeOutline className='icon-pass' onClick={() => setShowPass( !showPass )} />)
                : 
                (<IoEyeOffOutline className='icon-pass' onClick={() => setShowPass( !showPass )} />)
              }
            </div>
            <input 
              type='text' 
              placeholder='País'
              value={user.country === null ? "" : user.country}
              style={{ textTransform: 'capitalize'}}
              {...register('country')}
            />
            <input 
              type='number' 
              placeholder='Teléfono'
              value={user.phone === null ? "" : user.phone}
              {...register('phone')}
=======
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
>>>>>>> 942cba35f972c139adc825dd83c5e2d56e8df53e
            />

            <button type='submit' className='data-sub'>Guardar cambios</button>
          </form>
        </section>

      </main>
    </div>
  )
}

export default Profile
