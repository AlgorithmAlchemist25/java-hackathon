package com.harmoniq.attendee.service;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

import com.harmoniq.attendee.model.RSVP;
import com.harmoniq.attendee.repository.RSVPRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Base64;

@Service
public class RSVPService {

    @Autowired
    private RSVPRepository repository;

    public RSVP createRSVP(String name, String email, Long concertId) throws WriterException, IOException {
        RSVP rsvp = new RSVP();
        rsvp.setAttenderName(name);
        rsvp.setAttenderEmail(email);
        rsvp.setConcertId(concertId);
        rsvp.setRsvpTime(LocalDateTime.now());

        String qrText = name + "|" + email + "|" + concertId + "|" + rsvp.getRsvpTime();
        String qrBase64 = generateQRCodeBase64(qrText);
        rsvp.setQrCodeData(qrBase64);

        return repository.save(rsvp);
    }

    private String generateQRCodeBase64(String text) throws WriterException, IOException {
        QRCodeWriter writer = new QRCodeWriter();
        BitMatrix bitMatrix = writer.encode(text, BarcodeFormat.QR_CODE, 250, 250);

        ByteArrayOutputStream stream = new ByteArrayOutputStream();
        MatrixToImageWriter.writeToStream(bitMatrix, "PNG", stream);
        byte[] image = stream.toByteArray();

        return Base64.getEncoder().encodeToString(image);
    }
}
