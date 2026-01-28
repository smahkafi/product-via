"use client"
import { useState } from "react"

export default function AdminPage() {
    const [preview, setPreview] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);


    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>){
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size > 500 * 1024) {
            setError("File is too large. Maximum 500KB allowed.")
            setPreview(null);
            return
        } else {
            setError(null)
        }

        const imageUrl = URL.createObjectURL(file)
        setPreview(imageUrl)
    }
    return (
        <div>
            <h1>Admin Panel</h1>
            
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
            />
            {error && (
                <p style={{ color: "red" }}>{error}</p>
            )}
            {preview && (
                <img src={preview} alt="preview" width={120}/>)}
            <p></p>
            <img width="200" />

        </div>
    )
}