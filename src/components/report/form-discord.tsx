"use client";
import React, { useState } from "react";

const ReportBugForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    ourgame: "",
    message: "",
    option: "",
  });
  const [files, setFiles] = useState<FileList | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, option: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const tokenRes = await fetch("/api/form-token?form=report-bug", {
      method: "GET",
      cache: "no-store",
    });

    if (!tokenRes.ok) {
      alert("Error validating form. Please try again.");
      return;
    }

    const tokenBody = (await tokenRes.json()) as { token?: string };
    if (!tokenBody.token) {
      alert("Error validating form. Please try again.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("signature", tokenBody.token);
    formDataToSend.append("username", formData.username);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("ourgame", formData.ourgame);
    formDataToSend.append("message", formData.message);

    // Append selected files to formData
    if (files) {
      const firstFile = Array.from(files)[0];
      if (firstFile) {
        formDataToSend.append("file", firstFile);
      }
    }

    try {
      const res = await fetch("/api/report-bug", {
        method: "POST",
        body: formDataToSend,
      });

      if (!res.ok) {
        throw new Error("Failed to send message to Discord.");
      }

      alert("Message and files sent!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message or files.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          id="username"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          id="email"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label
          htmlFor="ourgame"
          className="block text-sm font-medium text-gray-700"
        >
          Select Game
        </label>
        <select
          name="ourgame"
          value={formData.ourgame}
          onChange={handleChange}
          id="ourgame"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        >
          <option value="">Select a game</option>
          <option disabled value="Detined Souls">
            Detained Souls
          </option>
          <option value="Juragan Fauna">Juragan Fauna</option>
          <option value="Aku si Juragan Empang">Aku si Juragan Empang</option>
          <option value="Aku si Juragan Ayam">Aku si Juragan Empang</option>
          <option value="Legendary Fish Hunter">Legendary Fish Hunter</option>
          <option value="Panitia Lomba 17 Agustusan">
            Panitia Lomba 17 Agustusan
          </option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          id="message"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          rows={5}
          required
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="files"
          className="block text-sm font-medium text-gray-700"
        >
          Upload Files
        </label>
        <input
          type="file"
          name="files"
          id="files"
          multiple
          onChange={handleFileChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
      >
        Send to Discord
      </button>
    </form>
  );
};

export default ReportBugForm;
